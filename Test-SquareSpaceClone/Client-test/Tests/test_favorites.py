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
options.add_argument("--start-maximized") 
driver= webdriver.Chrome(options=options) 
driver.get(URL)

#  getting template by type
try:
    logging.info("start checking prompt button")
    Online_store_button = WebDriverWait(driver, 30).until(
        EC.presence_of_element_located((By.XPATH, "//span[normalize-space()='Online Store']"))
        ).click()
    logging.info("succses in online_button✅")
except ArithmeticError as e:
    logging.error("failed to click online_button")

print("sucsses in pressing templates button")
# first failed log
try:
    logging.info("succses in getting to templates✅")
    logging.info("start checking favorites button")
    favorites_button = WebDriverWait(driver, WAIT_TIME).until(
        EC.presence_of_element_located((By.XPATH, "//button[@class='flex justify-center']"))
        ).click()
    logging.info("succses in logging in which means testing failed")
except ArithmeticError as e:
    logging.error("failed to get inside the page✅")

time.sleep(8)

# back to templates
back_button = WebDriverWait(driver, WAIT_TIME).until(
    EC.presence_of_element_located((By.XPATH, "//span[@class='text-base font-bold']"))
).click()

# getting to login
login_button = WebDriverWait(driver, WAIT_TIME).until(
    EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='LOG IN']"))
).click()
time.sleep(2)

def wait_for_element(driver, by, locator, clickable=False, timeout=WAIT_TIME):
    wait = WebDriverWait(driver, timeout)
    if clickable:
        return wait.until(EC.element_to_be_clickable((by, locator)))
    return wait.until(EC.presence_of_element_located((by, locator)))
#  log in
try:
    email_input = wait_for_element(driver, By.ID, "email")
    password_input = wait_for_element(driver, By.ID, "password")
    email_input.send_keys("eden@gmail.com")
    time.sleep(2)
    password_input.send_keys("eden")
    time.sleep(2)
    login_button = wait_for_element(
        driver, By.XPATH, "//button[normalize-space()='LOG IN']", clickable=True)
    login_button.click()
except TimeoutException:
    pytest.fail(
        "❌ One of the elements was not found within the allocated time!")

# getting into templates page again
templates_button = WebDriverWait(driver, WAIT_TIME).until(
    EC.presence_of_element_located((By.XPATH, "//b[normalize-space()='TEMPLATES']"))
)
time.sleep(2)
templates_button.click()

# adding favorite
fav_button = WebDriverWait(driver, WAIT_TIME).until(
    EC.presence_of_element_located((By.XPATH, "//body//div//div//div//div//div//div//div//div//div//div[1]//div[1]//div[1]//button[1]//span[2]"))
).click()

# second working log
try:
    logging.info("start checking favorites button again")
    favorites_button = WebDriverWait(driver, WAIT_TIME).until(
        EC.presence_of_element_located((By.XPATH, "//button[@class='flex justify-center']"))
        ).click()
    logging.info("succses in logging in✅")
except ArithmeticError as e:
    logging.error("failed to get inside the page")

# ✅ Close the browser after test completion
driver.quit()
