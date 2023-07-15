import Image from 'next/image'
import Timeline from '@/components/Timeline'
import TimelineItem from '@/components/TimelineItem'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Timeline>
        <TimelineItem
          title="Early Stone Age"
          description="The first stone tools, such as handaxes, are developed by early hominids, including Homo habilis and Homo erectus."
          date="2.6 million - 300,000 years ago"
          link={'/'}
        />
        <TimelineItem
          title="Middle Stone Age"
          description="Technological advancements include more refined stone tools, blades, and the development of specialized tools for specific tasks." 
          date="300,000 - 30,000 years ago"
          link={'/'}
        />
        <TimelineItem
          title="Late Stone Age"
          description="The use of microliths (small stone tools) becomes widespread, enabling greater precision and versatility in hunting and gathering activities."
          date="30,000 - 2000 BCE"
          link={'/'}
        />
        <TimelineItem
          title="Iron Age"
          description="The Bantu Expansion spread ironworking and agricultural practices, leading to the development of complex societies and the emergence of advanced technologies that revolutionized farming, warfare, and trade across the continent."
          date="2000 BCE - 500 CE"
          link={'/'}
        />
        <TimelineItem
          title="Medieval Period"
          description="Powerful African kingdoms and empires flourished, exhibiting advancements in architecture, agriculture, trade, and artistic expression, which left a lasting impact on the continent's history and cultural heritage." 
          date="500 - 1500 CE"
          link={'/'}
        />
        <TimelineItem
          title="Pre-colonial Period"
          description="Diverse African kingdoms and civilizations thrived. These societies showcased remarkable artistic and metallurgical skills, developed extensive trade networks, and preserved cultural and religious texts in illuminated manuscripts, reflecting the rich heritage and achievements of the time."
          date="1500 - 1880 CE"
          link={'/'}
        />

     </Timeline>
    </main>
  )
}
