
type CourseType11 ={
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules:string[]
}
let coursesArray1:CourseType11[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray1) {
    let courseDiv:HTMLDivElement = document.createElement('div');
    courseDiv.classList.add('course');

    let titleDiv:HTMLDivElement = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.innerText = course.title;

    let monthDurationDiv:HTMLDivElement = document.createElement('div');
    monthDurationDiv.classList.add('monthDuration');
    monthDurationDiv.innerText = `${course.monthDuration}`;

    let hourDurationDiv:HTMLDivElement = document.createElement('div');
    hourDurationDiv.classList.add('hourDuration');
    hourDurationDiv.innerText = `${course.hourDuration}`;

    let modulesUl:HTMLUListElement = document.createElement('ul');
    modulesUl.classList.add('modulesUl');
    for (let item of course.modules) {
        let li:HTMLLIElement = document.createElement('li');
        li.innerText = item;
        modulesUl.appendChild(li);
    }


    courseDiv.append(titleDiv, monthDurationDiv, hourDurationDiv, modulesUl);

    document.body.appendChild(courseDiv);

}