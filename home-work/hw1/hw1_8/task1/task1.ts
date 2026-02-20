
// @ts-ignore
type CourseType = {
    title: string, monthDuration: number
}
// @ts-ignore
let coursesAndDurationArray:CourseType[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

type CourseArray = {
    id: number,
    title: string,
    monthDuration: number
}
// @ts-ignore
let array:CourseArray[] = coursesAndDurationArray.map((value, index) =>
    ({id:index +1,title: value.title, monthDuration: value.monthDuration})

)

console.log(array);
