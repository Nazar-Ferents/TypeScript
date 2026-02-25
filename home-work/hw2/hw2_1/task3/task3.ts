
type CoursesType = {
    title: string,
    monthDuration: number
}

let coursesAndDurationArray1:CoursesType[] = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];

for (const course of coursesAndDurationArray1) {
    let div:HTMLDivElement = document.createElement('div');
    div.innerText = course.title + ' duration - ' + course.monthDuration;
    document.body.appendChild(div);
}