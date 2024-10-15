## Podcast Manager

> Node web api for managing famous podcast contents, creating lists by category and filters of creators and guests. It gets episodes from youtube for building the catalogue.

### Feature:

  - REST API for cover image, episode title, podcast name and link.

    ```js
    [
      {
        podcastName:"channel name",
        episode: "source video title",
        cover: "url for cover image",
        link: "url for source video on yt",
        category: ["topic1", "topic2", "topic3"]
      }
    ]
    ```

### Archtecture?

  