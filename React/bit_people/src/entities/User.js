export class User {
    constructor(name, gender, picture, email, dob){
        this.name = name;
        this.gender = gender;
        this.picture = picture;
        this.email = this.hiddenEmail(email);
        this.dob = this.formatDate(new Date(dob));
    }
    hiddenEmail (email) {
        const numToDel = email.indexOf('@')-6;
        let splitMail = email.split("");
        splitMail.splice(3, numToDel, "...").join("");
        return splitMail;   
    }

    formatDate (dob) {
        return `${dob.getDate()}.${dob.getMonth()+1}.${dob.getFullYear()}`
    }
}