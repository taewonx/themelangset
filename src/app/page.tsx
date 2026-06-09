'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function Home() {
  // 💡 [과제 6] 현재 선택된 언어(lang)를 가져와서 조건부 렌더링을 구현하세요.
  const { lang } = useSelector((state: RootState) => state.settings);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{lang === 'ko' ? '환영합니다!' : 'Welcome!'}</h1>
      <p>전역 상태 관리 대시보드 메인 페이지입니다.</p>
    </main>
  );
}