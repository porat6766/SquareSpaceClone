from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time

URL = "https://squarespaceclone.onrender.com"
XPATH_FEATURE_LIST = "//span[contains(text(), 'Feature List')]"
WAIT_TIME = 20


def test_main():
    options = webdriver.ChromeOptions()
    with webdriver.Chrome(options=options) as driver:
        driver.get(URL)
        
        time.sleep(3)

        last_height = driver.execute_script(
            "return document.body.scrollHeight")
        while True:
            driver.execute_script(
                "window.scrollTo(0, document.body.scrollHeight);")

            time.sleep(2)
            new_height = driver.execute_script(
                "return document.body.scrollHeight")
            if new_height == last_height:

                break
            last_height = new_height

        try:
            WebDriverWait(driver, WAIT_TIME).until(
                EC.presence_of_element_located((By.XPATH, XPATH_FEATURE_LIST))
            )
            print("✅ Element found!")
        except TimeoutException:
            print("❌ Element not found!")


if __name__ == "__main__":
    test_main()
