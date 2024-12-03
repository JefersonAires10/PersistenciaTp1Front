import { Modal, Form, Input, Button, Row, Col } from "antd";
import PropTypes from "prop-types";

const ModalAction = ({ visible, onClose, onSubmit, initialValues }) => {
    const [form] = Form.useForm();

    const handleOk = () => {
        form.validateFields()
            .then(values => {
                onSubmit(values);
                form.resetFields();
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    return (
        <Modal
            open={visible}
            title={initialValues ? "Editar Equipe" : "Cadastrar Equipe"}
            onCancel={onClose}
            footer={[
                <Button key="back" onClick={onClose}>
                    Cancelar
                </Button>,
                <Button key="submit" type="primary" onClick={handleOk}>
                    {initialValues ? "Salvar" : "Cadastrar"}
                </Button>,
            ]}
            width={800}
            style={{ top: '30%' }}
        >
            <Form
                form={form}
                layout="vertical"
                initialValues={initialValues}
            >
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            name="nome"
                            label="Nome"
                            rules={[{ required: true, message: 'Por favor, insira o nome da equipe!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="estadio"
                            label="Estádio"
                            rules={[{ required: true, message: 'Por favor, insira o estádio!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="apelido"
                            label="Apelido"
                            rules={[{ required: true, message: 'Por favor, insira o apelido!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            name="jogadores_registrados"
                            label="Jogadores Registrados"
                            rules={[{ required: true, message: 'Por favor, insira o número de jogadores registrados!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name={['info_tabela', 'pontos']}
                            label="Pontos"
                            rules={[{ required: true, message: 'Por favor, insira os pontos!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name={['info_tabela', 'jogos']}
                            label="Jogos"
                            rules={[{ required: true, message: 'Por favor, insira o número de jogos!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            name={['info_tabela', 'vitorias']}
                            label="Vitórias"
                            rules={[{ required: true, message: 'Por favor, insira o número de vitórias!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name={['info_tabela', 'empates']}
                            label="Empates"
                            rules={[{ required: true, message: 'Por favor, insira o número de empates!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name={['info_tabela', 'derrotas']}
                            label="Derrotas"
                            rules={[{ required: true, message: 'Por favor, insira o número de derrotas!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};

ModalAction.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
    initialValues: PropTypes.object
};

export default ModalAction;