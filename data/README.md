# Content editor guide

The website reads its student-facing content from `data/site-data.js`.

## Publish an update

Add a new object at the beginning of `updates`:

```js
{ date: "2026-08-01", type: "Exam", title: "Midterm routine published", body: "Include the essential details here.", priority: "important", link: "https://official-notice-link.example" },
```

- Use dates in `YYYY-MM-DD` format.
- Use `important` only for items students need to notice quickly.
- Add an official source in `link` whenever one exists.

## Add a resource

Add an object to `resources` with a title, area, format, URL, and one-sentence note. Only add resources that classmates can access and that you have checked.

## Update course information

Edit the matching object in `courses`. Keep the course code, credit, focus, book, and practical study suggestion current.

## Before publishing

Check spelling, dates, working links, and whether an announcement has an official source. Commit the data file with a clear message such as `Add midterm routine update`.
