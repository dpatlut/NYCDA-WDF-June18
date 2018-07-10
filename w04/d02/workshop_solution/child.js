class Child{
    constructor(name,age,hometown,rude){
        this.name = name;
        this.age = age;
        this.hometown = hometown;
        this.rude = rude;
    }
}

const childForm = document.getElementById('create-children');

childForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let nameInput = document.getElementById('child-name').value
    let ageInput = parseInt(document.getElementById('child-age').value)
    let hometownInput = document.getElementById('child-hometown').value
    let rudeInput = document.getElementById('child-rude').value
    let daycareInput = parseInt(document.getElementById('child-daycareid').value)
    let newChild = new Child(nameInput,ageInput,hometownInput,rudeInput)

    if(allDayCareCounter < daycareInput){
        alert('This daycare does not exist')
    }else{
        let selectedDaycare = document.getElementById(daycareInput).children;
        let daycareId = document.getElementById(daycareInput).id
        let sectionElement = selectedDaycare[selectedDaycare.length-1]
        let createdChild = createChild(nameInput);
        sectionElement.appendChild(createdChild);
        dayCareStore[daycareId-1].dayCareChildren.push(newChild);
        // console.log(dayCareStore)
    }   

})

const createChild = (childName) => {
    let wrapper = document.createElement('div')
    wrapper.classList.add('child-element')

    let removeButton = document.createElement('button')
    removeButton.innerText = "Remove"
    removeButton.classList.add('remove-child');
    
    //for time management we are only going to append the name
    let childWrapper = document.createElement('span')
    childWrapper.innerText = childName

    wrapper.append(childWrapper,removeButton)
    return wrapper
}