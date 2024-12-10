import { Modal, Form, Input, Button, Row, Col } from "antd";
import PropTypes from "prop-types";
import { useEffect } from "react";

const ModalAction = ({ visible, onClose, onSubmit, initialValues }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (visible) {
            if (initialValues) {
                form.setFieldsValue(initialValues);
            }
            else {
                form.resetFields();
            }
        }

    }, [initialValues, visible, form]);

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

    const handleCancel = () => {
        form.resetFields();
        onClose();
    };

    return (
        <Modal
            open={visible}
            title={initialValues ? "Editar Equipe" : "Cadastrar Equipe"}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
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
            >
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            name="nome"
                            label="Nome"
                            rules={[{ required: true, message: 'Por favor, insira o nome da equipe!' }]}
                        >
                            <Input placeholder="Nome da equipe" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="estadio"
                            label="Estádio"
                            rules={[{ required: true, message: 'Por favor, insira o estádio!' }]}
                        >
                            <Input placeholder="Estádio" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="apelido"
                            label="Apelido"
                            rules={[{ required: true, message: 'Por favor, insira o apelido!' }]}
                        >
                            <Input placeholder="Apelido" />
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
                            <Input placeholder="Número de jogadores registrados" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name={['info_tabela', 'pontos']}
                            label="Pontos"
                            rules={[{ required: true, message: 'Por favor, insira os pontos!' }]}
                        >
                            <Input placeholder="Pontos" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name={['info_tabela', 'jogos']}
                            label="Jogos"
                            rules={[{ required: true, message: 'Por favor, insira o número de jogos!' }]}
                        >
                            <Input placeholder="Número de jogos" />
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
                            <Input placeholder="Número de vitórias" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name={['info_tabela', 'empates']}
                            label="Empates"
                            rules={[{ required: true, message: 'Por favor, insira o número de empates!' }]}
                        >
                            <Input placeholder="Número de empates" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name={['info_tabela', 'derrotas']}
                            label="Derrotas"
                            rules={[{ required: true, message: 'Por favor, insira o número de derrotas!' }]}
                        >
                            <Input placeholder="Número de derrotas" />
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
    initialValues: PropTypes.object,
};

export default ModalAction;