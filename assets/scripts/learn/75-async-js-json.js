// --------------------------------------------------------------------------
// 📌 JSON (JavaScript Object Notation)
// --------------------------------------------------------------------------

(() => {
  const macbookPro = {
    operatingSystem: 'macOS Sequoia 15.5(24F74)',
    processor: '2.4GHz 8core Intel Core i9',
    memory: 64,
  };

  console.log(macbookPro); // JavaScript Object

  // ---------------------------------------------------------------
  // 클라이언트 -> 서버 요청 데이터
  // JavaScript 객체 -> JSON 문자화

  // Client -> Request (XHR) -> Server
  const jsonString = JSON.stringify(macbookPro);
  console.log(jsonString); // JSON String
  // '{"operatingSystem":"macOS Sequoia 15.5(24F74)","processor":"2.4GHz 8core Intel Core i9","memory":64}'

  const jsonStringWithReplacer = JSON.stringify(macbookPro, ['memory']);
  console.log(jsonStringWithReplacer); // JSON String
  // '{"memory":64}'

  const jsonStringWithSpace = JSON.stringify(macbookPro, null, 2);
  console.log(jsonStringWithSpace); // JSON String
  // {
  //   "operatingSystem": "macOS Sequoia 15.5(24F74)",
  //   "processor": "2.4GHz 8core Intel Core i9",
  //   "memory": 64
  // }

  // ---------------------------------------------------------------
  // 서버 -> 클라이언트 응답 데이터
  // JSON 문자열 -> JavaScript 객체화

  const notebookInfo = JSON.parse(
    jsonString,
    /* reviver */
    (key, value) => {
      if (typeof value === 'string') {
        return value.toUpperCase();
      }

      if (typeof value === 'number') {
        return value * 2;
      }

      return value;
    }
  );

  console.log(notebookInfo);
})();
