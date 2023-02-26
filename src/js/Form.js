class Form {
    clear() {
        this.node[0].value = '';
        this.node[1].value = '';
        this.node[2].value = '';
        this.node[3].value = '';
        this.node[5].checked = false;
        this.node[6].checked = false;
        this.node[7].checked = false;
        this.node[8].checked = false;
        this.node[9].checked = false;
    }

    getData() {
        const date = this.node[0].value;;
        const thought = this.node[3].value;
        const emptyValue = '';

        if (date === emptyValue || thought === emptyValue) {
            throw new Error("You can't add without thought and date!");
        }

        const ratingValue = () => {
            let result;
            const star = `⭐ `;
            if (this.node[5].checked) {
                result = star + this.node[5].nextElementSibling.innerText;
            } else if (this.node[6].checked) {
                result = star + this.node[6].nextElementSibling.innerText;
            } else if (this.node[7].checked) {
                result = star + this.node[7].nextElementSibling.innerText;
            } else if (this.node[8].checked) {
                result = star + this.node[8].nextElementSibling.innerText;
            } else if (this.node[9].checked)
                result = star + this.node[9].nextElementSibling.innerText;
            else {
                result = ``;
            }
            return result
        };


        return {
            date: this.node[0].value,
            mood: this.node[1].value,
            progress: this.node[2].value,
            thought: this.node[3].value,
            rating: ratingValue(),
        };
    }


    constructor() {
        this.node = document.getElementById('form');
    }
}

export default Form;