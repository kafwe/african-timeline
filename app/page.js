import Image from 'next/image'
import Timeline from '@/components/Timeline'
import TimelineItem from '@/components/TimelineItem'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">African Timeline</h1>
      <Timeline>
        <TimelineItem
          title="Early Stone Age"
          description="The first stone tools, such as handaxes, are developed by early hominids, including Homo habilis and Homo erectus."
          date="2.6 million - 300,000 years ago"
          link={'/map/early-stone-age'}
        />
        <TimelineItem
          title="Middle Stone Age"
          description="Technological advancements include more refined stone tools, blades, and the development of specialized tools for specific tasks." 
          date="300,000 - 30,000 years ago"
          link={'/map/middle-stone-age'}
        />
        <TimelineItem
          title="Late Stone Age"
          description="The use of microliths (small stone tools) becomes widespread, enabling greater precision and versatility in hunting and gathering activities."
          date="30,000 - 2000 BCE"
          link={'/map/late-stone-age'}
        />
        <TimelineItem
          title="Iron Age"
          description="The Bantu Expansion spread ironworking and agricultural practices, leading to the development of complex societies and the emergence of advanced technologies that revolutionized farming, warfare, and trade across the continent."
          date="2000 BCE - 500 CE"
          link={'/map/iron-age'}
        />
        <TimelineItem
          title="Medieval Period"
          description="Powerful African kingdoms and empires flourished, exhibiting advancements in architecture, agriculture, trade, and artistic expression, which left a lasting impact on the continent's history and cultural heritage." 
          date="500 - 1500 CE"
          link={'/map/medieval'}
        />
        <TimelineItem
          title="Pre-colonial Period"
          description="Diverse African kingdoms and civilizations thrived. These societies showcased remarkable artistic and metallurgical skills, developed extensive trade networks, and preserved cultural and religious texts in illuminated manuscripts, reflecting the rich heritage and achievements of the time."
          date="1500 - 1880 CE"
          link={'/map/pre-colonial'}
        />

     </Timeline>
    </main>
  )
}
