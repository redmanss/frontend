import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PDFViewer, Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer'
import './index.css'

// Підключаємо шрифт, який підтримує кирилицю
Font.register({
  family: 'Roboto',
  src: '/fonts/Roboto-Regular.ttf',
  fontStyle: 'normal',
  fontWeight: 'normal'
})

// Забираємо дані з глобального об'єкта
const { title, price, description } = (window as any).__pdf_data__ || {
  title: 'title',
  price: 'price',
  description: 'description',
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#fff',
    fontSize: 12,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  }
})

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.section}>
        <Text>{price}</Text>
      </View>
      <View style={styles.section}>
        <Text>{description}</Text>
      </View>
    </Page>
  </Document>
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PDFViewer width="100%" height="100%">
      <MyDocument />
    </PDFViewer>
  </StrictMode>
)