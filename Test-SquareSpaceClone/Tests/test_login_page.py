from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time

URL = "https://squarespaceclone.onrender.com/login"
WAIT_TIME = 10


def test_main():
    options = webdriver.ChromeOptions()

    with webdriver.Chrome(options=options) as driver:
        driver.get(URL)
        time.sleep(3)  

        try:
            
            email_input = WebDriverWait(driver, WAIT_TIME).until(
                EC.presence_of_element_located((By.ID, "email"))
            )

            
            password_input = WebDriverWait(driver, WAIT_TIME).until(
                EC.presence_of_element_located((By.ID, "password"))
            )

            
            login_button = WebDriverWait(driver, WAIT_TIME).until(
                EC.element_to_be_clickable(
                    (By.CSS_SELECTOR, "button.w-full.py-2.rounded.font-medium.transition-all.bg-gray-300.text-gray-600.cursor-not-allowed")
                )
            )
            
            email_input.send_keys("eden@gmail.com")
            password_input.send_keys("eden")
            
            print("Email input value:", email_input.get_attribute("value"))
            print("Password input value:", password_input.get_attribute("value"))

            time.sleep(3)  

            login_button.click()
            time.sleep(3)  

        except TimeoutException:
            print("❌ Elements not found!")


if __name__ == "__main__":
    test_main()
