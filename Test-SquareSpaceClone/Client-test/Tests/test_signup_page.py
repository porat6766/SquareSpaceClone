import pytest
import random
import string
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

URL = "https://squarespaceclone.onrender.com/signup"
WAIT_TIME = 10


def generate_random_email():
    domains = ["@gmaijl1.com", "@jyahoo1.com", "@hohtmail1.com",
               "@ojutlook1.com", "@icljoud1.com", "bjhsdb@gmail1.com"]
    return ''.join(random.choices(string.ascii_lowercase + string.digits, k=10)) + random.choice(domains)


def generate_random_password():
    return ''.join(random.choices(string.ascii_letters + string.digits, k=8))


@pytest.fixture(scope="function")
def driver():
    options = webdriver.ChromeOptions()
    driver = webdriver.Chrome(options=options)
    driver.get(URL)
    yield driver
    driver.quit()


@pytest.mark.parametrize(
    "first_name, last_name, email, password, expected_name",
    [
        ("TestFirstName", "TestLastName", generate_random_email(),
         generate_random_password(), "TestFirstName")
    ]
)
def test_signup_success(driver, first_name, last_name, email, password, expected_name):
    wait = WebDriverWait(driver, WAIT_TIME)

    try:
        first_name_input = wait.until(
            EC.presence_of_element_located((By.ID, "firstName")))

        last_name_input = wait.until(
            EC.presence_of_element_located((By.ID, "lastName")))

        email_input = wait.until(
            EC.presence_of_element_located((By.ID, "email")))

        password_input = wait.until(
            EC.presence_of_element_located((By.ID, "password")))

        first_name_input.send_keys(first_name)
        last_name_input.send_keys(last_name)
        email_input.send_keys(email)
        password_input.send_keys(password)

        signup_button = wait.until(EC.element_to_be_clickable(
            (By.XPATH, "//button[normalize-space()='CONTINUE']")))
        signup_button.click()

        profile_img = wait.until(
            EC.element_to_be_clickable(
                (By.XPATH, "//span[@class='w-12 h-12 rounded-full bg-black text-white font-bold text-2xl flex items-center justify-center pb-1']"))
        )
        profile_img.click()

        profile_name = wait.until(EC.presence_of_element_located(
            (By.XPATH, "//li[@class='px-4 py-2 font-semibold text-lg']")))

        assert expected_name in profile_name.text, "❌ Username is incorrect!"

    except TimeoutException:
        pytest.fail(
            "❌ One of the elements was not found within the allocated time!")


if __name__ == "__main__":
    pytest.main(["-v", __file__])
