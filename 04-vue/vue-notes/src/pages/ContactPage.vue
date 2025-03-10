<template>
    <div class="">
        <div class="text-center mb-4">
            <h2>Contact Us</h2>
            <p>Any question is remark kindly message.</p>
        </div>
        <div class="row border">
            <!-- Información de contacto -->
            <div class="col-md-4 bg-white p-4 ps-lg-5">
                <h4>Contact Information</h4>
                <p>Say Some Thing To Chat.</p>
                <div class="mb-3 bg-secondary p-2" style="width: 30px; height: 30px;"></div>
                <p>+932-133-1330</p>
                <div class="mb-3 bg-secondary p-2" style="width: 30px; height: 30px;"></div>
                <p>xxxx@gmail.com</p>
                <div class="mb-3 bg-secondary p-2" style="width: 30px; height: 30px;"></div>
                <p>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                <div class="d-flex gap-2">
                    <div class="bg-secondary p-2" style="width: 30px; height: 30px;"></div>
                    <div class="bg-secondary p-2" style="width: 30px; height: 30px;"></div>
                    <div class="bg-secondary p-2" style="width: 30px; height: 30px;"></div>
                </div>
            </div>
            <!-- Formulario de contacto -->
            <div class="col-md-8 bg-light p-4 pe-lg-5">
                <form @submit.prevent="handleSubmit" novalidate>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label class="form-label">First Name:</label>
                            <!-- <input :value="data.firstName" @change="handleInputChange" name="firstName" type="text" class="form-control" ref="firstNameInputRef"> -->
                            <input name="firstName" v-model="data.firstName" type="text" class="form-control" ref="firstNameInputRef">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Last Name:</label>
                            <!-- <input :value="data.lastName" @change="handleInputChange" name="lastName" type="text" class="form-control"> -->
                            <input name="lastName" v-model="data.lastName" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label class="form-label">Email:</label>
                            <input name="email" v-model="data.email" type="email" class="form-control">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Phone Number:</label>
                            <input name="phone" v-model="data.phone" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Purpose?</label><br>
                        <div class="form-check form-check-inline">
                            <!-- <input class="form-check-input" type="radio" @change="handleInputChange" value="1" name="purpose" checked> -->
                            <input class="form-check-input" type="radio" v-model="data.purpose" value="1" name="purpose" checked>
                            <label class="form-check-label">Problema</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="data.purpose" value="2" name="purpose">
                            <label class="form-check-label">Comentario</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="data.purpose" value="3" name="purpose">
                            <label class="form-check-label">Mejora</label>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Message:</label>
                        <textarea name="message" v-model="data.message" class="form-control" rows="3" placeholder="Write your message."></textarea>
                    </div>
                    <!-- <button @click="saludo($event, 'Rafael')" type="button" class="btn btn-dark">Send Message</button> -->
                    <button type="submit" class="btn btn-dark">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

// const saludo = () => {
//     console.log("Hola mundo")
// }

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    purpose: '1',
    phone: '',
    message: '',
    email: ''
}

export default {
    data(){
        return {
            data: {...INITIAL_STATE}
        }
    },
    methods: {
        handleInputChange(e){
            const value = e.target.value;
            const name = e.target.name;

            console.log({ name, value })

            this.data[name] = value;
        },
        saludo: (e, nombre) => {
            const button = e.target;

            button.innerText = 'Saludo enviado';

            console.log("Hola", nombre);
        },
        handleSubmitRef(){
            const input = this.$refs.firstNameInputRef; 
            const value = input.value;

            const data =  {
                firstName: value
                // ...
            }

            console.log(data)
            input.value = '';
        },
        handleSubmitFormData(e){
            const myForm = e.target; // myForm.elements => Obtiene la lista de inputs del formulario
            
            const formData = new FormData(myForm);

            // const myFormData = {
            //     firstName: formData.get('firstName'),
            //     lastName: formData.get('lastName')
            // }

            const fields = Object.fromEntries(formData.entries());

            console.log(fields);

            myForm.reset();
        },
        handleSubmit(e){
            console.log(this.data)

            if(this.data.firstName.length > 6){
                return alert("El nombre es muy largo")
            }

            // Enviando el formulario
            console.log("Enviando el formulario")

            this.data = {...INITIAL_STATE};
        },
    }
}
</script>