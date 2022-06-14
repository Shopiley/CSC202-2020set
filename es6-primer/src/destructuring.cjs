
var userInput = (item) => {
    var readLine = require('readline-sync');
    return readLine.question(`Input your ${item} : `)
}
/*
hobbyString = userInput("hobby")
hobbyList = hobbyString.split(',');
*/

const genericFunction = () => { 
    //declare an object literal with nested objects 
    let biodata = { 
    personalInformation : { //object in object
    firstName : userInput("firstname"), 
    lastName : userInput("lastname"), 
    gender : 'Male', 
    religion : 'Christianity (Catholic)', 
    fathersName : 'John', 
    mothersName : 'Patricia' 
    }, 
    education : { 
    highestQualificationObtained : 'PhD', 
    institution : userInput("institution") 
    }, 
    occupation : 'University Lecturer', 
    skills : userInput("skill").split(','),     //can accept lists as user inputs
    interestsAndHobbies : userInput("hobbies").split(',')  
    }; 
    
    //deconstruct firstName, lastName from the nested personalInformation object as well as occupation. You can't use objects as whole for destructuring 
    let { personalInformation:{firstName,lastName, religion}, occupation} = biodata;//makes firstName, lastName and occupation directly available as variables within our function. 
    //deconstruct personalInformation and then the rest using the spread operator
    let { personalInformation, ...otherBiodata} = biodata;//makes personalInformation object directly available as a variable. The rest (using Spread operator) are made available as part of an object named otherBiodata 
    //output data using a multiline string literal. We have embedded <br/> so that the browser will break the lines as well for us 
    return `First name is ${firstName} and lastname is ${lastName}. The occupation is ${occupation}. A lot more data are available. For example: 
    Gender: ${personalInformation.gender}
    Religion: ${religion} 
    Skills: ${otherBiodata.skills} 
    Interests and Hobbies: ${otherBiodata.interestsAndHobbies[0]} 
    Education: Highest qualification obtained is ${otherBiodata.education.highestQualificationObtained} from ${biodata.education.institution}`; 
}

console.log(genericFunction())


/*
//array destructuring
const genericFunction = () => {
    const languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
    const [firstLang, secondLang, ...otherLanguages] = languages; //assign first element in languages array to firstLang and second element to secondLang.
    return`First language is ${firstLang} and the second is ${secondLang} as well as ${otherLanguages}`
}


//object destructuring
const genericFunction = () => {
    //declare an object literal
    const personalInformation = {
        firstName: 'Pius',
        lastName: 'Onobhayedo',
        gender: 'Male',
        religion: 'Christianity (Catholic)',
        fathersName: 'John',
        mothersName: 'Patricia'
    }

    //deconstruct into new variables firstName, last name and otherPersonalInfo
    const { lastName, firstName, ...otherPersonalInfo } = personalInformation;
    return `The first name is ${firstName} and the lastName is ${lastName}. Others are: gender = ${otherPersonalInfo.gender}, religion = ${otherPersonalInfo.religion}`;
    //return `The first name is ${firstName}, ${lastName}, ${otherPersonalInfo}` //won't work: sees otherPersonalInfo as an object on it's own
}
*/