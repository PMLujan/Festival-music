function iniciarApp(){navegacionFija(),scrollNav(),crearGaleria()}function navegacionFija(){const e=document.querySelector(".header"),n=document.querySelector(".sobre-festival");window.addEventListener("scroll",(function(){n.getBoundingClientRect().bottom<0?(e.classList.add("fija"),console.log("ya pasamos el elemento")):(e.classList.remove("fija"),console.log("aun no.."))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const n=e.target.attributes.href.value;document.querySelector(n).scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const t=document.createElement("picture");t.innerHTML=`\n        <source srcset="build/img/thumb/${n}.avif" type="image/avif">\n        <source srcset="build/img/thumb/${n}.webp" type="image/webp">\n        <img loading="lazy" src="./build/img/thumb/${n}.jpg" alt="Imagen Galeria">\n        `,t.onclick=function(){mostrarImagen(n)},e.appendChild(t)}}function mostrarImagen(e){console.log("Mostrando..",e);const n=document.createElement("picture");n.innerHTML=`\n    <source srcset="build/img/grande/${e}.avif" type="image/avif">\n    <source srcset="build/img/grande/${e}.webp" type="image/webp">\n    <img loading="lazy" src="./build/img/grande/${e}.jpg" alt="Imagen Galeria">\n    `;const t=document.createElement("div");t.appendChild(n),t.classList.add("overlay"),t.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()};const o=document.createElement("P");o.textContent="X",o.classList.add("btn-cerrar"),o.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()},t.appendChild(o);const a=document.querySelector("body");a.appendChild(t),a.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJpbmljaWFyQXBwIiwibmF2ZWdhY2lvbkZpamEiLCJzY3JvbGxOYXYiLCJjcmVhckdhbGVyaWEiLCJoZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzb2JyZUZlc3RpdmFsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdHRvbSIsImNsYXNzTGlzdCIsImFkZCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIkVsZW1lbnQiLCJldmVudG8iLCJwcmV2ZW50RGVmYXVsdCIsInNlY2Npb25TY3JvbGwiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVzIiwiaHJlZiIsInZhbHVlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImdhbGVyaWEiLCJpIiwiaW1hZ2VuIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIm9uY2xpY2siLCJtb3N0cmFySW1hZ2VuIiwiYXBwZW5kQ2hpbGQiLCJpZCIsIm92ZXJsYXkiLCJjZXJyYXJNb2RhbCIsInRleHRDb250ZW50IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBSUEsU0FBU0EsYUFDTEMsaUJBQ0FDLFlBQ0FDLGVBR0osU0FBU0YsaUJBQ0wsTUFBTUcsRUFBUUMsU0FBU0MsY0FBYyxXQUMvQkMsRUFBY0YsU0FBU0MsY0FBYyxtQkFFM0NFLE9BQU9DLGlCQUFpQixVQUFVLFdBQzNCRixFQUFjRyx3QkFBd0JDLE9BQVMsR0FDOUNQLEVBQU9RLFVBQVVDLElBQUksUUFDckJDLFFBQVFDLElBQUksNEJBRVpYLEVBQU9RLFVBQVVJLE9BQU8sUUFDeEJGLFFBQVFDLElBQUksZ0JBS3hCLFNBQVNiLFlBQ1VHLFNBQVNZLGlCQUFpQiwyQkFDM0JDLFFBQVFDLElBQ1JBLEVBQVFWLGlCQUFpQixTQUFTLFNBQVNXLEdBQ3pDQSxFQUFPQyxpQkFFRCxNQUFNQyxFQUFlRixFQUFPRyxPQUFPQyxXQUFXQyxLQUFLQyxNQUNwQ3JCLFNBQVNDLGNBQWNnQixHQUM5QkssZUFBZSxDQUFFQyxTQUFTLGdCQUs1RCxTQUFTekIsZUFDTCxNQUFNMEIsRUFBU3hCLFNBQVNDLGNBQWMscUJBQ3RDLElBQUksSUFBSXdCLEVBQUUsRUFBR0EsR0FBRyxHQUFLQSxJQUFJLENBQ3JCLE1BQU1DLEVBQVExQixTQUFTMkIsY0FBYyxXQUNyQ0QsRUFBT0UsVUFBVyw2Q0FDZ0JILHVFQUNBQSxrRkFDV0EseUNBRTdDQyxFQUFPRyxRQUFRLFdBQ1hDLGNBQWNMLElBRWxCRCxFQUFRTyxZQUFZTCxJQUc1QixTQUFTSSxjQUFjRSxHQUNuQnZCLFFBQVFDLElBQUksY0FBY3NCLEdBQzFCLE1BQU1OLEVBQVExQixTQUFTMkIsY0FBYyxXQUNyQ0QsRUFBT0UsVUFBVywwQ0FDaUJJLG9FQUNBQSwrRUFDV0EscUNBRy9DLE1BQU1DLEVBQVFqQyxTQUFTMkIsY0FBYyxPQUNyQ00sRUFBUUYsWUFBWUwsR0FDcEJPLEVBQVExQixVQUFVQyxJQUFJLFdBRXRCeUIsRUFBUUosUUFBUSxXQUNKN0IsU0FBU0MsY0FBYyxRQUN2Qk0sVUFBVUksT0FBTyxjQUN0QnNCLEVBQVF0QixVQUdmLE1BQU11QixFQUFZbEMsU0FBUzJCLGNBQWMsS0FDbkNPLEVBQVlDLFlBQVksSUFDeEJELEVBQVkzQixVQUFVQyxJQUFJLGNBQzFCMEIsRUFBWUwsUUFBUyxXQUNQN0IsU0FBU0MsY0FBYyxRQUN2Qk0sVUFBVUksT0FBTyxjQUM1QnNCLEVBQVF0QixVQUVYc0IsRUFBUUYsWUFBWUcsR0FFMUIsTUFBTUUsRUFBS3BDLFNBQVNDLGNBQWMsUUFDNUJtQyxFQUFLTCxZQUFZRSxHQUNqQkcsRUFBSzdCLFVBQVVDLElBQUksY0FwRjVCUixTQUFTSSxpQkFBaUIsb0JBQW9CLFdBQzFDVCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcclxuICAgIGluaWNpYXJBcHAoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBpbmljaWFyQXBwKCl7XHJcbiAgICBuYXZlZ2FjaW9uRmlqYSgpO1xyXG4gICAgc2Nyb2xsTmF2KCk7XHJcbiAgICBjcmVhckdhbGVyaWEoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIG5hdmVnYWNpb25GaWphKCl7XHJcbiAgICBjb25zdCBoZWFkZXI9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuICAgIGNvbnN0IHNvYnJlRmVzdGl2YWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvYnJlLWZlc3RpdmFsJyk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKHNvYnJlRmVzdGl2YWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIDwgMCl7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdmaWphJylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3lhIHBhc2Ftb3MgZWwgZWxlbWVudG8nKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmlqYScpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdW4gbm8uLicpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2Nyb2xsTmF2KCl7XHJcbiAgICBjb25zdCBlbmxhY2VzPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2ZWdhY2lvbi1wcmluY2lwYWwgYScpO1xyXG4gICAgICAgICAgZW5sYWNlcy5mb3JFYWNoKEVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnRvKXtcclxuICAgICAgICAgICAgICAgICAgICBldmVudG8ucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VjY2lvblNjcm9sbD0gZXZlbnRvLnRhcmdldC5hdHRyaWJ1dGVzLmhyZWYudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VjY2lvbj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWNjaW9uU2Nyb2xsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNjaW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6XCJzbW9vdGhcIn0pO1xyXG4gICAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgXHJcbiAgICAgICAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXJHYWxlcmlhKCl7XHJcbiAgICBjb25zdCBnYWxlcmlhPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsZXJpYS1pbWFnZW5lcycpXHJcbiAgICBmb3IobGV0IGk9MTsgaTw9MTIgOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IGltYWdlbiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpXHJcbiAgICAgICAgaW1hZ2VuLmlubmVySFRNTD0gYFxyXG4gICAgICAgIDxzb3VyY2Ugc3Jjc2V0PVwiYnVpbGQvaW1nL3RodW1iLyR7aX0uYXZpZlwiIHR5cGU9XCJpbWFnZS9hdmlmXCI+XHJcbiAgICAgICAgPHNvdXJjZSBzcmNzZXQ9XCJidWlsZC9pbWcvdGh1bWIvJHtpfS53ZWJwXCIgdHlwZT1cImltYWdlL3dlYnBcIj5cclxuICAgICAgICA8aW1nIGxvYWRpbmc9XCJsYXp5XCIgc3JjPVwiLi9idWlsZC9pbWcvdGh1bWIvJHtpfS5qcGdcIiBhbHQ9XCJJbWFnZW4gR2FsZXJpYVwiPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgaW1hZ2VuLm9uY2xpY2s9ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbW9zdHJhckltYWdlbihpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2FsZXJpYS5hcHBlbmRDaGlsZChpbWFnZW4pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG1vc3RyYXJJbWFnZW4oaWQpe1xyXG4gICAgY29uc29sZS5sb2coJ01vc3RyYW5kby4uJyxpZClcclxuICAgIGNvbnN0IGltYWdlbiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpXHJcbiAgICBpbWFnZW4uaW5uZXJIVE1MPSBgXHJcbiAgICA8c291cmNlIHNyY3NldD1cImJ1aWxkL2ltZy9ncmFuZGUvJHtpZH0uYXZpZlwiIHR5cGU9XCJpbWFnZS9hdmlmXCI+XHJcbiAgICA8c291cmNlIHNyY3NldD1cImJ1aWxkL2ltZy9ncmFuZGUvJHtpZH0ud2VicFwiIHR5cGU9XCJpbWFnZS93ZWJwXCI+XHJcbiAgICA8aW1nIGxvYWRpbmc9XCJsYXp5XCIgc3JjPVwiLi9idWlsZC9pbWcvZ3JhbmRlLyR7aWR9LmpwZ1wiIGFsdD1cIkltYWdlbiBHYWxlcmlhXCI+XHJcbiAgICBgO1xyXG4gICAgLy9jcmVhIGVsIG92ZXJsZXkgY29uIGxhIGltYWdlblxyXG4gICBjb25zdCBvdmVybGF5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBvdmVybGF5LmFwcGVuZENoaWxkKGltYWdlbik7XHJcbiAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xyXG4gICAvLyB0b2NhciBsYSBmb3RvIHkgY2VycmFybGFcclxuICAgb3ZlcmxheS5vbmNsaWNrPWZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBib2R5PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZmlqYXItYm9keScpO1xyXG4gICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKVxyXG4gICB9O1xyXG4gICAvL2JvdG9uIHBhcmEgY2VycmFyIG1vZGFsXHJcbiAgIGNvbnN0IGNlcnJhck1vZGFsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcclxuICAgICAgICAgY2VycmFyTW9kYWwudGV4dENvbnRlbnQ9J1gnO1xyXG4gICAgICAgICBjZXJyYXJNb2RhbC5jbGFzc0xpc3QuYWRkKCdidG4tY2VycmFyJyk7XHJcbiAgICAgICAgIGNlcnJhck1vZGFsLm9uY2xpY2s9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpamFyLWJvZHknKTtcclxuICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKVxyXG4gICAgICAgICB9O1xyXG4gICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKGNlcnJhck1vZGFsKTtcclxuICAgLy9hw7FhZGVsbyBhbCBIVE1MXHJcbiAgIGNvbnN0IGJvZHk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgICBib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xyXG4gICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2ZpamFyLWJvZHknKTtcclxufSJdfQ==
