app.component('review-form', {
    template:
        /*html*/
        `<form class='review-form' @submit.prevent="onSubmit">
            <h3> Leave a review </h3>
            <label for="name">name:</label>        
            <input id="name" v-model="name">

            <label for="review">review:</label>
            <input id="review" v-model="review">

            <label for="rating">rating:</label>
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
            <input class="button" type="submit" value="Submit">            
        </form>
        `,
    data: () => {
        return {
            name: '',
            review: '',
            rating: null,
        }
    },
    methods: {
        onSubmit() {
            // form validation 
            if(this.name===''||this.review==='' || this.rating ===null){
                alert("please fill out every field");
                return;
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
            }

            this.$emit('review-submitted', productReview)
            this.resetForm();
        },
        resetForm(){
            this.name = '';
            this.review = '';
            this.rating = null;
        }
    }
})