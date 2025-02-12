import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

URL = "https://squarespaceclone.onrender.com/login"
WAIT_TIME = 10


@pytest.fixture(scope="function")
def driver():
    options = webdriver.ChromeOptions()
    driver = webdriver.Chrome(options=options)
    driver.get(URL)
    yield driver
    driver.quit()


def wait_for_element(driver, by, locator, clickable=False, timeout=WAIT_TIME):
    wait = WebDriverWait(driver, timeout)
    if clickable:
        return wait.until(EC.element_to_be_clickable((by, locator)))
    return wait.until(EC.presence_of_element_located((by, locator)))


def test_login_success(driver):
    try:
        email_input = wait_for_element(driver, By.ID, "email")
        password_input = wait_for_element(driver, By.ID, "password")
        email_input.send_keys("eden@gmail.com")
        password_input.send_keys("eden")
        login_button = wait_for_element(
            driver, By.XPATH, "//button[normalize-space()='LOG IN']", clickable=True)
        login_button.click()
        profile_img = wait_for_element(
            driver, By.CLASS_NAME, "min-w-12.rounded-full.aspect-square.object-cover", clickable=True)
        profile_img.click()
        profile_name = wait_for_element(
            driver, By.XPATH, "//li[@class='px-4 py-2 font-semibold text-lg']")
        assert "eden shabi" in profile_name.text, "❌ Username is incorrect!"
    except TimeoutException:
        pytest.fail(
            "❌ One of the elements was not found within the allocated time!")


if __name__ == "__main__":
    pytest.main(["-v", __file__])
