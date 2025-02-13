import logging
import time
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

URL = "https://squarespaceclone.onrender.com"
XPATH_FEATURE_LIST = "//span[contains(text(), 'Feature List')]"
WAIT_TIME = 20
options = webdriver.ChromeOptions()
driver= webdriver.Chrome(options=options) 
driver.get(URL)


def test_main():
    options 
    with driver:
        wait = WebDriverWait(driver, WAIT_TIME)
        driver.get(URL)

        hamburger = wait.until(
            EC.element_to_be_clickable(
                (By.XPATH, "//button[contains(text(),'☰')]"))
        )
        hamburger.click()

        sidebar = wait.until(
            EC.visibility_of_element_located(
                (By.CLASS_NAME, "fixed.top-0.right-0.h-full.w-64.bg-black.text-white.shadow-lg.transition-transform.duration-300.translate-x-0")
            )
        )

        print("1")

        assert sidebar.is_displayed(), "Sidebar did not display after clicking the hamburger button."

        print("2")

        body = driver.find_element(By.TAG_NAME, "body")

        print("3")

        body.click()

        print("4")

        driver.execute_script(
            "window.scrollTo(0, document.body.scrollHeight);")
        wait.until(lambda d: d.execute_script("return window.scrollY") > 0)

        driver.execute_script("window.scrollTo(0, 0);")
        wait.until(lambda d: d.execute_script("return window.scrollY") == 0)

        try:
            wait.until(EC.presence_of_element_located(
                (By.XPATH, XPATH_FEATURE_LIST)))
            print("✅ Element found!")
        except TimeoutException:
            print("❌ Element not found!")

time.sleep(15)


if __name__ == "__main__":
    test_main()


