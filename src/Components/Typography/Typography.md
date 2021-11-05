link [(<https://mui.com/api/typography/>)]

# կարևորագույն ատրիբուտները

1. `variant` ['body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2' | string]:
2. paragraph [bool]
3. `align` ['center' | 'inherit' | 'justify' | 'left' | 'right']
4. `component` ընդունում է թեգի անունը վորի մեջ ամփոփված կլինի մեջի տեքստը:Եթե component ատրիբուտը տված չէ թեգի անունը որոշ դեպքերում վերցրվում է `variant` ատրիբուտից։
5. `gutterBottom`: Եթե  ատրիբուտը տրված է, ՜լեմենտը կունենա "magrin: 0.35em" չափով։

`<Typography variant="h1" component="div" gutterBottom>`
        `h1. Heading`
`</Typography>`

6. Կարելի է նաը նշանակել "inline" css կանոններ․՝

`<Typography variant="h1" component="div" style={{padding: "10px"}}>`
