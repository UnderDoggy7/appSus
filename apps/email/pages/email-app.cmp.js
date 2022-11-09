import { emailService } from '../services/email.service.js'

import emailFilter from "../cmps/email-filter.cmp.js";
import emailList from '../cmps/email-list.cmp.js'

export default {
    template: `
    <email-filter></email-filter>
    <email-list :emails="emails"></email-list>
    <section class="car-app">
            <h1>hello</h1>
    </section>
    `,
    data(){
        return { 
           emails: null
        }
    },
    created(){
      emailService.query()
        .then(emails => {
            this.emails = emails
        })
    },
    methods: {
        
        },
       
    computed: {
       
    },
    components: {
    emailFilter,
    emailList,
    }
}