import * as S from './style';

const Legend = () => {
    return (
        <S.LegendContainer>
            <S.LegendItem>
                <S.LegendColor color="blue" />
                <S.LegendText>Libertadores</S.LegendText>
            </S.LegendItem>
            <S.LegendItem>
                <S.LegendColor color="cyan" />
                <S.LegendText>Pré-Libertadores</S.LegendText>
            </S.LegendItem>
            <S.LegendItem>
                <S.LegendColor color="green" />
                <S.LegendText>Sul-Americana</S.LegendText>
            </S.LegendItem>
            <S.LegendItem>
                <S.LegendColor color="#333" />
                <S.LegendText>Manteve</S.LegendText>
            </S.LegendItem>
            <S.LegendItem>
                <S.LegendColor color="red" />
                <S.LegendText>Rebaixados</S.LegendText>
            </S.LegendItem>
        </S.LegendContainer>
    );
};

export default Legend;
