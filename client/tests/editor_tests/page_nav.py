# assert
# pytest

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import datetime


def nav_to_editor():
    baba = ""

driver = webdriver.Chrome()
driver.get("http://localhost:5173/")
driver.maximize_window()
time.sleep(3)
# elements = driver.find_elements(By.XPATH, "//li[@data-product-name]")
driver.quit()

# def get_product_name(element):
#     return element.get_attribute("data-product-name")

# def get_product_name(driver, locator):  # Pass the driver and locator
#     try:
#         element = WebDriverWait(driver, 10).until(  # Wait up to 10 seconds
#             EC.presence_of_element_located(locator)  # Wait for element to be present
#         )
#         return element.get_attribute("data-product-name")
#     except Exception as e:
#         print(f"Error getting product name: {e}")
#         return "unknown"