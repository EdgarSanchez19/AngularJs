/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    angular.module("BibliotecaManagement")
            .controller("LibrosListCtrl", LibrosListCtrl);

    function LibrosListCtrl() {
        var me = this;
        me.libros = [
            {
                "id": 1,
                "titulo": "El Hobbit",
                "autor": "J. R. R. Tolkien",
                "categoria": "Fantasía",
                "ISBN": "978-84-450-0176-9",
                "disponibilidad": "19",
                "portada": "img/hobbit-portada.jpg"
            },
            {
                "id": 2,
                "titulo": "El Señor de los Anillos I: La comunidad del anillo",
                "autor": "J. R. R. Tolkien",
                "categoria": "Fantasía",
                "ISBN": "978-84-450-0066-3",
                "disponibilidad": "5",
                "portada": "img/comunidad del anillo-portada.jpg"
            },
            {
                "id": 3,
                "titulo": "El Señor de los Anillos II: Las Dos Torres",
                "autor": "J. R. R. Tolkien",
                "categoria": "Fantasía",
                "ISBN": "978-84-450-0067-0",
                "disponibilidad": "7",
                "portada": "img/las dos torres-portada.jpg"
            },
            {
                "id": 4,
                "titulo": "El Señor de los Anillos III: El Retorno del Rey",
                "autor": "J. R. R. Tolkien",
                "categoria": "Fantasía",
                "ISBN": "978-84-450-0068-7",
                "disponibilidad": "4",
                "portada": "img/el retorno del rey-portada.jpg"
            },
            {
                "id": 5,
                "titulo": "Drácula",
                "autor": "Bram Stoker",
                "categoria": "Terror",
                "ISBN": " 978-97-007-6239-5",
                "disponibilidad": "11",
                "portada": "img/dracula-portada.jpg"
            },
            {
                "id": 6,
                "titulo": "Canción de Hielo y Fuego I: Juego de Tronos",
                "autor": "George R. R. Martin",
                "categoria": "Terror",
                "ISBN": " 978-84-96802-27-8",
                "disponibilidad": "23",
                "portada": "img/juego de tronos-portada.jpg"
            }
        ];
   
    me.showImage = false;
    
    me.toggleImage = function(){
        me.showImage = !me.showImage;
    };
    }
}());


