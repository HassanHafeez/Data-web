let hellobtn = document.querySelector('button'); // Select Button, and store in a variable hellobtn
hellobtn.addEventListener('click',inputMsg);

function inputMsg()
{
    let name=prompt("Enter the Name: ");
    hellobtn.textContent = 'Entered name is '+name; 
   // alert("Hello World!");
}

/*
void inputmsg()
{
    string name;
    cout<<"Enter Name: "; cin>>name;
    cout<<"Entered name is "<<name<<endl;
}
int main()
{
    inputmsg();
}
*/