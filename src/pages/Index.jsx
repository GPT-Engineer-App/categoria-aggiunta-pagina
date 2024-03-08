import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, useToast } from "@chakra-ui/react";
import { FaSave, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const toast = useToast();
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);

  const handleNameChange = (event) => setCategoryName(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const handleSave = () => {
    if (!categoryName) {
      toast({
        title: "Errore",
        description: "Il nome della categoria non può essere vuoto.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (categories.includes(categoryName)) {
      toast({
        title: "Errore",
        description: "Esiste già una categoria con questo nome.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setCategories([...categories, categoryName]);
    setCategoryName("");
    setDescription("");

    toast({
      title: "Categoria Salvata",
      description: "La nuova categoria è stata salvata con successo.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleCancel = () => {
    setCategoryName("");
    setDescription("");
    // In un'app reale, qui si potrebbe reindirizzare l'utente all'elenco delle categorie o alla pagina precedente
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <FormControl id="categoryName" isRequired>
          <FormLabel>Nome Categoria</FormLabel>
          <Input placeholder="Inserisci il nome della categoria" value={categoryName} onChange={handleNameChange} />
        </FormControl>
        <FormControl id="description">
          <FormLabel>Descrizione</FormLabel>
          <Textarea placeholder="Inserisci una descrizione (opzionale)" value={description} onChange={handleDescriptionChange} />
        </FormControl>
        <Button leftIcon={<FaSave />} colorScheme="blue" onClick={handleSave}>
          Salva
        </Button>
        <Button leftIcon={<FaTimes />} colorScheme="red" onClick={handleCancel}>
          Annulla
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
