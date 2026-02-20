
type CourseType = {
    title: string, monthDuration: number
}
type CourseIdType = {
    title: string, monthDuration: number, id: number
}




let coursesAndDurationArray:CourseType[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


let sort:CourseType[] = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)

console.log(sort);

let filter:CourseType[] = coursesAndDurationArray.filter((value) => value.monthDuration >= 5);
console.log(filter);

let map:CourseIdType[] = filter.map((value,index) =>{
    let newCoursesAndDurationArray:CourseIdType = {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration

    }
    return newCoursesAndDurationArray;
})

console.log(map);