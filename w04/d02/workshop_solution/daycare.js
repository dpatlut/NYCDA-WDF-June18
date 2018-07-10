let allDayCareCounter = 0;
let upperContainer = document.getElementById('upper-container');
let lowerContainer = document.getElementById('lower-container')


class DayCare{
    constructor(name, id, cleanStatus, numOfChildcareWorkers){
        this.name = name;
        this.id = id;
        this.cleanStatus = cleanStatus;
        this.numOfChildcareWorkers = numOfChildcareWorkers;
        this.dayCareChildren = []
    }

    addChild(child){
        this.dayCareChildren.push(child)
    }

    renderDayCare(){
        //Creating the container div for us
        let newContainer = document.createElement('div');
        newContainer.classList.add('daycare')
        newContainer.id = this.id

        //creating elements for the daycares propertys
        let name = document.createElement('h1')
        name.innerText = 'Name:' + this.name;

        let status = document.createElement('h2')
        status.innerText = 'Status:' + (this.cleanStatus ? "Clean" : "Not Clean");

        let id = document.createElement('h3')
        id.innerText = 'Id:' + this.id;

        let workers = document.createElement('h3')
        workers.innerText = 'Number of Workers:' + this.numOfChildcareWorkers;

        //Responsible for appending any children part of our daycare
        let childrenContainer = document.createElement('section')
        childrenContainer.classList.add('children-list')
        for(let child of this.dayCareChildren){
            //Create remove button

            let wrapper = document.createElement('div')
            wrapper.classList.add('child-element')

            let removeButton = document.createElement('button')
            removeButton.innerText = "Remove"
            removeButton.classList.add('remove-child');
            
            //for time management we are only going to append the name
            let childWrapper = document.createElement('span')
            childWrapper.innerText = child.name 

            wrapper.append(childWrapper,removeButton)
            childrenContainer.append(wrapper)
        }


        
        newContainer.append(name,status,id,workers, childrenContainer);
        upperContainer.appendChild(newContainer);
        allDayCareCounter++;
    }
}


const daycareForm = document.getElementById('create-daycare');

daycareForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let nameInput = document.getElementById('daycare-name').value
    let numWorkers = document.getElementById('daycare-numofworkers').value
    let dayCareStatus = document.getElementById('daycare-status').value
    if(dayCareStatus === "Clean"){
        dayCareStatus = true;
    }else{
        dayCareStatus = false;
    }
    let newDaycare = new DayCare(nameInput, allDayCareCounter+1, dayCareStatus, numWorkers);
    dayCareStore.push(newDaycare);
    newDaycare.renderDayCare();
})

const removeChildButton = document.getElementsByClassName('remove-child')



//Note: Append Method - NO BUENO IN EXPLORER/EDGE
//Recommended Refactor: Document Fragments  