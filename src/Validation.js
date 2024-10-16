const input_field={
 
name:/^[A-Z][a-z]{3,5}/,
email:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
phonenumber:/^[0-9]{10}$/,
password:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
confirmpassword:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

}
const validate=(field,regex)=>{
    regex.test(field.value)? field.className='valid': field.className='invalid';
}

let keys=document.queryselectorAll('input');
console.log(keys)
keys.array.forEach(item => {
    item.addEventListener('keyup', (event) => {
        validate(event.target, input_field[event.target.attributes.name.value]);
    });
});
