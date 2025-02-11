from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time

URL = "https://squarespaceclone.onrender.com/signup"
WAIT_TIME = 10

def test_signup_page():
    options = webdriver.ChromeOptions()
    with webdriver.Chrome(options=options) as driver:
        driver.get(URL)
        time.sleep(3)
