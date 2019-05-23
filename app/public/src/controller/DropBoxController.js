class DropBoxController{

    constructor(){

        this.btnSendFieldEl = document.querySelector('#btn-send-file');
        this.inputFileEl = document.querySelector('#files');
        this.snackModalEl = document.querySelector('#react-snackbar-root');
        this.initEvents();


    }

    initEvents(){
        
        this.btnSendFieldEl.addEventListener('click', event =>{
            this.inputFileEl.click();
        });

        this.inputFileEl.addEventListener('change', event =>{
            console.log('event.target.files', event.target.files);
            this.snackModalEl.getElementsByClassName.display = 'block';
        });


    }

}