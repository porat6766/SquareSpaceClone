import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

URL = "https://squarespaceclone.onrender.com"
XPATH_FEATURE_LIST = "//span[contains(text(), 'Feature List')]"
WAIT_TIME = 20


def test_main():
    options = webdriver.ChromeOptions()

    with webdriver.Chrome(options=options) as driver:
        wait = WebDriverWait(driver, WAIT_TIME)
        driver.get(URL)

        hamburger = wait.until(
            EC.element_to_be_clickable(
                (By.XPATH, "//button[contains(text(),'☰')]"))
        )
        hamburger.click()

        sidebar = wait.until(
            EC.visibility_of_element_located(
                (By.CLASS_NAME, "fixed.top-0.right-0.h-full.w-64.bg-black.text-white.shadow-lg.transition-transform.duration-300.translate-x-0"))
        )

        assert sidebar.is_displayed()

        close_sidebar = wait.until(
            EC.presence_of_element_located(
                (By.CLASS_NAME, "absolute.top-4.right-4.text-2xl"))
        )

        close_sidebar.click()

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


if __name__ == "__main__":
    test_main()
