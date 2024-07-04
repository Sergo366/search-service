import Image from 'next/image'
import People from '../shared/images/people.png'

export default function Home() {
  return (
      <div style={{backgroundColor: `#00c3a5`}}>
        <main className={'flex justify-center gap-32 pb-12'}>
            <div className={'py-20'}>
                <h2 className={'text-3xl'}>
                    <strong>Знайдіть лікаря та запишіться на прийом</strong>
                </h2>
                <h4 className={'text-xl'}>Шукай серед 146 000 лікарів.</h4>
                <div className={'py-8'}>
                    <input type="text" className={'w-full h-8'}/>
                </div>
            </div>
            <div>
                <Image src={People as string} width={350} alt={'main icon'}/>
            </div>
        </main>
      </div>
  );
}