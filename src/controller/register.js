function clearForm() {
  document.getElementById("email").value = "";
  document.getElementById("pass").value = "";
  document.getElementById("re_pass").value = "";
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("male").checked = true; // Reset to default male
}

// Validation functions
function validateName(name) {
  const nameRegex = /^[a-zA-ZÀ-ỹ\s]{2,50}$/;
  return nameRegex.test(name);
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  // Ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

function validatePhone(phone) {
  // Số điện thoại Việt Nam: 10-11 số, bắt đầu bằng 0
  const phoneRegex = /^0[0-9]{9,10}$/;
  return phoneRegex.test(phone);
}

function validateGender(gender) {
  return gender !== undefined;
}

function showError(input, message) {
  const formGroup = input.parentElement;
  const errorElement =
    formGroup.querySelector(".error-message") || document.createElement("span");
  errorElement.className = "error-message";
  errorElement.textContent = message;
  input.classList.add("error");
  if (!formGroup.querySelector(".error-message")) {
    formGroup.appendChild(errorElement);
  }
}

function clearError(input) {
  const formGroup = input.parentElement;
  const errorElement = formGroup.querySelector(".error-message");
  if (errorElement) {
    errorElement.remove();
  }
  input.classList.remove("error");
}

// Hàm kiểm tra email tồn tại
async function checkEmailExists(email) {
  try {
    const response = await axios.get(
      `https://shop.cyberlearn.vn/api/Users/email?email=${email}`
    );
    return response.data; // Trả về true nếu email tồn tại, false nếu chưa tồn tại
  } catch (error) {
    console.error("Error checking email:", error);
    return false;
  }
}

async function handleSubmit(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;
  const rePassword = document.getElementById("re_pass").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const gender = document.getElementById("male").checked;

  // Clear previous errors
  clearError(document.getElementById("email"));
  clearError(document.getElementById("pass"));
  clearError(document.getElementById("re_pass"));
  clearError(document.getElementById("name"));
  clearError(document.getElementById("phone"));

  let isValid = true;

  if (!validateName(name)) {
    showError(
      document.getElementById("name"),
      "Tên phải từ 2-50 ký tự và chỉ chứa chữ cái"
    );
    isValid = false;
  }

  if (!validateEmail(email)) {
    showError(document.getElementById("email"), "Email không hợp lệ");
    isValid = false;
  }

  if (!validatePassword(password)) {
    showError(
      document.getElementById("pass"),
      "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt"
    );
    isValid = false;
  }

  if (password !== rePassword) {
    showError(
      document.getElementById("re_pass"),
      "Mật khẩu xác nhận không khớp"
    );
    isValid = false;
  }

  if (!validatePhone(phone)) {
    showError(document.getElementById("phone"), "Số điện thoại không hợp lệ");
    isValid = false;
  }

  if (!validateGender(gender)) {
    alert("Vui lòng chọn giới tính");
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  // Kiểm tra email tồn tại trước khi đăng ký
  const emailExists = await checkEmailExists(email);
  if (emailExists) {
    showError(
      document.getElementById("email"),
      "Email này đã được sử dụng. Vui lòng sử dụng email khác!"
    );
    return;
  }

  // Create data object
  const data = {
    email: email,
    password: password,
    name: name,
    gender: gender,
    phone: phone,
  };

  try {
    const response = await axios.post(
      "https://shop.cyberlearn.vn/api/Users/signup",
      data
    );

    if (response.data.statusCode === 200) {
      alert("Đăng ký thành công!");
      clearForm();
    } else {
      alert(response.data.message);
      clearForm();
    }
  } catch (error) {
    console.error("Error:", error);
    if (error.response && error.response.data) {
      alert(
        error.response.data.message || "Đăng ký thất bại. Vui lòng thử lại!"
      );
    } else {
      alert("Đăng ký thất bại. Vui lòng thử lại!");
    }
  }
}

document.getElementById("btn-register").addEventListener("click", handleSubmit);
