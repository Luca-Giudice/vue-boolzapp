console.log('Vue OK', Vue);

const dateTime = luxon.DateTime;

const app = Vue.createApp({
    data() {
        return {
            currentIndex: 0,
            newMessage:"",
            searchContact:'',

            user: {
                name: 'Luca Giudice',
                avatar: '_io'
            },
            contacts: [
                {
                  name: 'Simone',
                  avatar: '_1',
                  visible: true,
            messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
            }
            ],
                },
                {
                  name: 'Fabio',
                  avatar: '_2',
                  visible: true,
                  messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                  },
                  {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                  },
                  {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Giovanni',
                  avatar: '_3',
                  visible: true,
                  messages: [{
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
                },
                {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
                },
                {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
                }
                ],
                },
                {
                  name: 'Enrico',
                  avatar: '_4',
                  visible: true,
                 messages: [{
                 date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
      status: 'sent'
    },
    {
      date: '10/01/2020 15:50:00',
      text: 'Si, ma preferirei andare al cinema',
      status: 'received'
    }
    ],
                },
              ]
        }
    },
    computed:{
      currentContact (){
        return this.contacts[this.currentIndex];
      },
      currentChat() {
        return this.currentContact.messages;
      },
    },
    methods: {
        buildAvatarUrl(avatar) {
            return `img/avatar${avatar}.jpg`;
        },
        getCurrentMoment(){
          return dateTime.now().setLocale('it').toLocaleString(dateTime.DATETIME_SHORT_WITH_SECONDS);
        },
        setCurrentIndex(index){
            this.currentIndex = index;
        },

        currentMoment(){
          return 
        },
       sendMessage(){
          if(!this.newMessage) return;

          const newMessage = {
            status: 'sent',
            date: this.currentMoment(),
            text: this.newMessage
          };

          this.contacts[this.currentIndex].messages.push(newMessage);
          this.newMessage ='';
          setTimeout(() => {
            const newMessage = {
              status: 'received',
              date: this.currentMoment(),
              text: 'OK'
            };

            this.currentChat.push(newMessage);
          }, 1000)
        }
    }
    
});

app.mount('#root');