//import { resolve } from "dns";
//import { rejects } from "assert";

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
            this.uploadTask(event.target.files);
            this.snackModalEl.style.display = 'block';
        });


    }

    uploadTask(files){
        let promises = [];
        //operador spread ...
        [...files].forEach(file=>{
            promises.push(new Promise((resolve, reject) => {
                let ajax = new XMLHttpRequest();
                ajax.open('POST', '/upload');
                ajax.onload = event =>{
                    try{
                        resolve(JSON.parse(ajax.responseText));
                    }catch (error){
                        reject(error);
                    }
                };
                ajax.onerror = event =>{
                    reject(event);
                };

                let formData = new FormData();
                formData.append('input-file', file);
                ajax.send(formData);

            }));
        });

        return Promise.all(promises);
    }

}