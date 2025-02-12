from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.remote.webdriver import WebDriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

import time
import datetime

import db_handle

URL = "https://squarespaceclone.onrender.com"
WAIT_TIME = 5

test_log = {
    "current_time":datetime.datetime.now().isoformat(),
    "login":False,
    "navigate_to_pages":False,
    "added_page":False,
    "removed_page":False
}

def find_and_click_website_and_pages(wait):
    website_button = wait.until(
        EC.presence_of_element_located((By.XPATH, "//span[normalize-space()='Website']"))
    )
    website_button.click()
    pages_button = wait.until(
        EC.presence_of_element_located((By.XPATH, "//span[normalize-space()='Pages']"))
    )
    pages_button.click()

    if(website_button and pages_button):
        test_log["login"] = True
        test_log["navigate_to_pages"] = True

def check_if_page_added(page_name, driver:WebDriver):
    page = driver.find_element(By.XPATH, f"//button[normalize-space()='{page_name}']")
    if(page):
        test_log["added_page"] = True

def check_if_page_exists(page_name, driver:WebDriver):
    page = False
    try:
        page = driver.find_element(By.XPATH, f"//button[normalize-space()='{page_name}']")
    except:
        return False
    
    if(page):
        return True
    return False

def find_delete_button_and_delete(page_name, driver):
    delete_button = driver.find_element(By.XPATH, "//li[button[normalize-space()='test_page_test_page']]//button[@aria-label='Delete']")
    delete_button.click()

# This should be broken down into smaller functions for clarity
TEST_PAGE_NAME = "test_page_test_page"

def test_test():
    driver = webdriver.Chrome()
    wait = WebDriverWait(driver, WAIT_TIME)

    driver.get("https://squarespaceclone.onrender.com/")
    driver.maximize_window()
    loginButton = driver.find_element(By.XPATH, "//button[normalize-space()='LOG IN']")
    loginButton.click()
    email_input = driver.find_element(By.XPATH, "//input[@id='email']")
    email_input.send_keys("rubberducky@gmail.com")
    password_input = driver.find_element(By.XPATH, "//input[@id='password']")
    password_input.send_keys("1234")
    submit_login_button = driver.find_element(By.XPATH, "//button[normalize-space()='LOG IN']")
    submit_login_button.click()


    profile_menu_button = wait.until(
        EC.element_to_be_clickable(
            (By.XPATH, "//span[@class='w-12 h-12 rounded-full bg-black text-white font-bold text-2xl flex items-center justify-center pb-1']")
        ))
    profile_menu_button.click()

    profile_button = driver.find_element(By.XPATH, "//li[normalize-space()='Profile']")
    profile_button.click()

    first_edit_button = wait.until(
        EC.element_to_be_clickable(
            (By.XPATH, "//button[text()='Edit']")
        )
    )
    first_edit_button.click()
    find_and_click_website_and_pages(wait)

    if(check_if_page_exists(TEST_PAGE_NAME, driver)):
        find_delete_button_and_delete(TEST_PAGE_NAME, driver)
        find_and_click_website_and_pages(wait)

    add_page_button = wait.until(
        EC.element_to_be_clickable((By.XPATH, "(//button[@class='text-gray-600 hover:text-black hover:bg-gray-200 p-3 cursor-pointer'])[1]"))
    )
    add_page_button.click()
    add_page_input = driver.find_element(By.XPATH, "//input[@placeholder='Page Name...']")
    add_page_input.send_keys(TEST_PAGE_NAME)
    submit_page_button = driver.find_element(By.XPATH, "(//button[@class='ml-2'])[1]")
    submit_page_button.click()
    find_and_click_website_and_pages(wait)
    check_if_page_added("test_page_test_page", driver)
    find_delete_button_and_delete(TEST_PAGE_NAME, driver)
    if(not check_if_page_exists(TEST_PAGE_NAME, driver)):
        test_log["removed_page"] = True

    # ------------------------problem section start-------------------------------------
    # ------------------------problem section end------------------------------------------------------

    driver.quit()
    db_handle.add_log(test_log)

test_test()

# def test_main():
#     options = webdriver.ChromeOptions()
#     with webdriver.Chrome(options=options) as driver:
#         driver.get(URL)

#         time.sleep(3)

#         last_height = driver.execute_script("return document.body.scrollHeight")
#         while True:
#             driver.execute_script(
#                 "window.scrollTo(0, document.body.scrollHeight);")

#             time.sleep(2)
#             new_height = driver.execute_script(
#                 "return document.body.scrollHeight")
#             if new_height == last_height:

#                 break
#             last_height = new_height

#         try:
#             WebDriverWait(driver, WAIT_TIME).until(
#                 EC.presence_of_element_located((By.XPATH, XPATH_FEATURE_LIST))
#             )
#             print("✅ Element found!")
#         except TimeoutException:
#             print("❌ Element not found!")

# test_test()

# if __name__ == "__main__":
    # test_test()
