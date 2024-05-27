document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementsByClassName('.form');
    form.addEventListener('Submit', function(event) {
     
        isValid = true;

       const fname = document.getElementById('.firstname').value.trim();
       const lname = document.getElementById('.lastname').value.trim();
       const email = document.getElementById('.email').value.trim();
       const jobrole = document.getElementById('.job-role').value.trim();
       const tarea = document.getElementById('.address').value.trim();
       const city = document.getElementById('.city').value.trim();
       const pincode = document.getElementById('.pincode').value.trim();
       const date = document.getElementById('.Date').value.trim();
       const upload = document.getElementById('.upload').value.trim();

       if(fname === '') {
        alert('First Name is required');
        isValid = false;
       }
       if(lname === '') {
        alert('Last Name is required');
        isValid = false;
       }
       if(email === '' || !validateEmail(email)) {
        alert('A valid email is required');
        isValid = false;
       }

       if(jobrole === '') {
        alert('Job-role is required');
        isValid = false;
       }
       if(tarea === '') {
        alert('Address is required');
        isValid = false;
       }
       if(city === '') {
        alert('city is required');
        isValid = false;
       }
       if(pincode === '') {
        alert('A valid pincode is required');
        isValid = false;
       }
       if(date === '') {
        alert('Date is required');
        isValid = false;
       }
       if(upload === '') {
        alert('Upload your CV');
        isValid = false;
       }

       if(!isValid){
        event.preventDefault();

       }
       
    })

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());

    }
});




