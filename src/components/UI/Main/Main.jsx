import Image from 'next/image'
import styles from './Main.module.scss'
import useTranslation from 'next-translate/useTranslation'
import { Button } from '@mui/material'

export function Main() {
  const { t } = useTranslation('common')
  console.log(process.env.NEXT_PUBLIC_BASE_URL)
  return (
    <main className={styles.main}>
      <Button size='large' color='primary'>
        Button
      </Button>
      {/* next image
            https://nextjs.org/docs/api-reference/next/image
        */}
      <div className={styles.banner}>
        <div className={styles.text}>{t('greeting')}</div>
        <Image
          src='/images/airplain.jpg'
          width='100%'
          height='100%'
          objectFit='cover'
          alt='airplain'
          layout='fill'
        />
      </div>

      {/* next image domain config
            https://nextjs.org/docs/basic-features/image-optimization#domains
        */}
      <div className={styles.img}>
        <Image
          src='https://test.cdn.rasta.app/rasta/9302ea6c-46d9-4a9c-a9e0-5e9aa9631250'
          width={310}
          height={207}
          alt='airplain'
          objectFit='cover'
          layout='responsive'
        />
      </div>
    </main>
  )
}
