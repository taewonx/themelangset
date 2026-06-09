export interface UserSettings {
    // 'light' | 'dark' 처럼 정해진 문자열만 허용하는 것을 '리터럴 타입'이라고 합니다.
    // 오타(예: 'litht')를 방지하고 자동완성을 도와줍니다.
    theme: 'light' | 'dark';
    lang: 'ko' | 'en';
  }