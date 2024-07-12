import { Athlete } from '../../models/athlete.model'; // Ajusta la ruta según tu estructura de archivos
import PDFDocument from 'pdfkit';
import { Buffer } from 'buffer';

// Función para obtener los atletas por Id_Partida
export const getAthletesByIdPartida = async (Id_Partida: string) => {
    try {
        const athletes = await Athlete.findAll({
            where: { Id_Partida: Id_Partida },
            attributes: ['Id', 'Name', 'LastName', 'Numero_Sorteo', 'Birthdate', 'IwfCoiCode', 'Primer_Envion', 'Primer_Arranque']
        });
        return athletes.map(athlete => athlete.toJSON());
    } catch (error) {
        console.error('Error al obtener los atletas:', error);
        throw error;
    }
};

// Función para generar el informe PDF en formato base64
export const generarPDFInformeBase64 = async (_Id_Partida: string, athletes: any[]): Promise<string> => {
    try {
        console.log('Datos de atletas obtenidos:', athletes);

        return new Promise((resolve, reject) => {
            const doc = new PDFDocument();
            let buffers: Buffer[] = [];

            doc.on('data', buffers.push.bind(buffers));
            doc.on('end', () => {
                const pdfData = Buffer.concat(buffers);
                const base64 = pdfData.toString('base64');
                resolve(base64);
            });
            doc.on('error', reject);

            // Añadir encabezado al documento PDF
            doc
                .fontSize(14)
                .text('INSTITUTO COLOMBIANO DEL DEPORTE - COLDEPORTES', { align: 'center' })
                .text('FEDERACIÓN COLOMBIANA DE LEVANTAMIENTO DE PESAS', { align: 'center' })
                .moveDown(2);

            // Añadir sección de información de atletas al documento PDF
            doc
                .fontSize(14)
                .text('Información de Atletas', { align: 'left' })
                .moveDown(1);

            // Encabezado de la tabla de atletas
            const tableTop = doc.y;
            doc
                .fontSize(12)
                .text('ID', 50, tableTop)
                .text('Nombre', 100, tableTop)
                .text('Apellido', 200, tableTop)
                .text('Número de Sorteo', 300, tableTop)
                .text('Fecha de Nacimiento', 400, tableTop)
                .text('Código IWF/COI', 500, tableTop)
                .text('Primer Envión', 600, tableTop)
                .text('Primer Arranque', 700, tableTop);

            // Añadir los datos de atletas al documento PDF
            let yPosition = tableTop + 20;
            athletes.forEach((athlete) => {
                doc
                    .fontSize(10)
                    .text(athlete.Id, 50, yPosition)
                    .text(athlete.Name, 100, yPosition)
                    .text(athlete.LastName, 200, yPosition)
                    .text(athlete.Numero_Sorteo.toString(), 300, yPosition)
                    .text(new Date(athlete.Birthdate).toLocaleDateString(), 400, yPosition)
                    .text(athlete.IwfCoiCode, 500, yPosition)
                    .text(athlete.Primer_Envion.toString(), 600, yPosition)
                    .text(athlete.Primer_Arranque.toString(), 700, yPosition);

                yPosition += 20;
            });

            // Finalizar la creación del documento PDF
            doc.end();
        });
    } catch (error) {
        console.error('Error al generar el informe PDF:', error);
        throw new Error('Error al generar el informe PDF');
    }
};
