from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time

URL = "https://squarespaceclone.onrender.com"
WAIT_TIME = 5


def find_and_click_website_and_pages(wait):
    website_button = wait.until(
        EC.element_to_be_clickable((By.XPATH, "//span[normalize-space()='Website']"))
    )
    website_button.click()
    pages_button = wait.until(
        EC.element_to_be_clickable((By.XPATH, "//span[normalize-space()='Pages']"))
    )
    pages_button.click()

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
    # time.sleep(1)
    profile_menu_button = wait.until(
        EC.element_to_be_clickable(
            (By.XPATH, "//span[@class='w-12 h-12 rounded-full bg-black text-white font-bold text-2xl flex items-center justify-center pb-1']")
        ))
    # profile_menu_button = driver.find_element(By.XPATH, "//span[@class='w-12 h-12 rounded-full bg-black text-white font-bold text-2xl flex items-center justify-center pb-1']")
    profile_menu_button.click()
    # time.sleep(2)
    profile_button = driver.find_element(By.XPATH, "//li[normalize-space()='Profile']")
    profile_button.click()
    # time.sleep(2)
    first_edit_button = wait.until(
        EC.element_to_be_clickable(
            (By.XPATH, "//button[text()='Edit']")
        )
    )
    first_edit_button.click()

    find_and_click_website_and_pages(wait)

    add_page_button = wait.until(
        EC.element_to_be_clickable((By.XPATH, "(//button[@class='text-gray-600 hover:text-black hover:bg-gray-200 p-3 cursor-pointer'])[1]"))
    )
    add_page_button.click()
    add_page_input = driver.find_element(By.XPATH, "//input[@placeholder='Page Name...']")
    add_page_input.send_keys("test_page_test_page")
    submit_page_button = driver.find_element(By.XPATH, "(//button[@class='ml-2'])[1]")
    submit_page_button.click()
    # driver.execute_script("window.scrollBy(0,300);")
    # driver.execute_script("window.scrollTo(0, 100);")
    find_and_click_website_and_pages(wait)
    delete_button = driver.find_element(By.XPATH, "//li[button[normalize-space()='test_page_test_page']]//button[@aria-label='Delete']")
    time.sleep(1)
    delete_button.click()
    time.sleep(3)
    driver.quit()


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


# if __name__ == "__main__":
#     test_main()
