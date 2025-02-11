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

        
        last_height = driver.execute_script("return document.body.scrollHeight")
        scroll_step = 200  
        while True:
            driver.execute_script(f"window.scrollBy(0, {scroll_step});")
            time.sleep(1)  
            new_height = driver.execute_script("return document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height

        
        scroll_step_up = -200  
        while True:
            driver.execute_script(f"window.scrollBy(0, {scroll_step_up});")
            time.sleep(1)  
            current_position = driver.execute_script("return window.scrollY")
            if current_position == 0:
                break

        try:
            WebDriverWait(driver, WAIT_TIME).until(
                EC.presence_of_element_located((By.XPATH, XPATH_FEATURE_LIST))
            )
            print("✅ Element found!")
        except TimeoutException:
            print("❌ Element not found!")

if __name__ == "__main__":
    test_main()
