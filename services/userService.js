


const configDate = async (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR" , {
                year : "numeric" , 
                month : "long" , 
                day : "numeric"
        });
        return newDate;
}




module.exports = {
        configDate
}