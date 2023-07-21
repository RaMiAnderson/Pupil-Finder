document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prevYear,prev,next,nextYear today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay'
        },
        initialDate: new Date(),
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        dayMaxEvents: true, // allow "more" link when too many events
        events: [
            {
                title: 'Rentrée Scolaire',
                start: '2023-07-01'
            },
            {
                title: 'Examen',
                start: '2023-07-07',
                end: '2023-07-10'
            },
            {
                title: 'Evaluation',
                start: '2023-07-09T16:00:00'
            },
            {
                groupId: 999,
                title: 'Partage & conférence',
                start: '2023-07-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2023-07-11',
                end: '2023-07-13'
            },
            {
                title: 'Meeting',
                start: '2023-07-12T10:30:00',
                end: '2023-07-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2023-07-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2023-07-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2023-07-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2023-07-12T20:00:00'
            },
            {
                title: 'Réunion des professeurs',
                start: '2023-07-13T07:00:00'
            },
            {
                title: 'Finition du site ISPM (Click pour acceder)',
                url: 'https://ispm-edu.com/',
                start: '2023-07-28'
            }
        ]
    });

    calendar.render();
});