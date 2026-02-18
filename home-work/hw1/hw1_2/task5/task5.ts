
type Day = {
    morning:number,
    afternoon:number,
    evening: number}

type WeekDay = [string,Day]

let temperatures :WeekDay[]  = [
    ["Monday",
        {
            morning:17,
            afternoon:25,
            evening: 21
        }],
    ["Tuesday",
        {
            morning:17,
            afternoon:25,
            evening: 21
        }],
    ["Wednesday",
        {
            morning:17,
            afternoon:25,
            evening: 21
        }],
    ["Thursday",
        {
            morning:17,
            afternoon:25,
            evening: 21
        }],
    ["Friday",
        {
            morning:17,
            afternoon:25,
            evening: 21
        }],
    ["Saturday",
        {
            morning:17,
            afternoon:25,
            evening: 21
        }],
    ["Sunday",
        {
            morning:17,
            afternoon:25,
            evening: 21
        }]
];