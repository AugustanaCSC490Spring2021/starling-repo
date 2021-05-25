# Productivity Dashboard

To help out college students stay organized in managing their tasks, and keeping track of their expenses, our productivity dashboard does this all in one place - by incorporating a calendar to a to-do list, managing finances, and generating reports based on user's progress.

## Function
- In the dashboard, the user is able to see the weather and time at the current location
- it displays two columns: one for the upcoming tasks or events due today and the other column to display user's total income and expenses.
- Notes page shows more details of user's upcoming tasks, where the user can select a date from the calendar and add a task, with a tag which the users can filter according to tag and the status of the task can also be filtered when users toggle tasks (all tasks, in progress, completed). Users can edit and delete the task.
- The Expenses page shows a column with user's current earnings and spending, and computes the total, and allows users to add new expenses/income and displays a table of user's data which consists of the name and  amount of the expenses and/or spending. Users can filter the table by Dates (3 recent days / Week / Today) and Type (Earning / Expenses)
- Reports Page performs the data visualisation of user's expenses and tasks using charts, 
  where in the expenses tab it displays the balance, frequency of spending and income and makes a pie chart based Earnings vs Spending and filter the charts based on dates such as in 3 most recent days, or a week.
- In the todos tab of the Report Page, it displays charts based on tasks by categories, and completion of tasks, and users can filter the charts based on dates being 3 most recent days, or one week's charts.

## Demo
![Productivity Dash Demo](Group-App-Demo.gif)

## Technologies Used:
Front-end: React.js, Redux/React Hooks
Back-end: Nodejs
Databases: Firebase Firestore
UI framework: MaterialUI, Bootstrap
APIs: Weather API, Calendar API

MIT License

Copyright (c) 2021 AugustanaCSC490Spring2021

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


