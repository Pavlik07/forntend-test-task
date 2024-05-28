Тестовое задание

Необходимо, используя React, разработать web-приложение, отображающее информацию о состоянии бригад.

Исходные данные находятся в файле ./data/data.json. Если хотите, можете сгенерировать их самостоятельно, выполнив в терминале команду node ./data-generator.js.

Описание исходных данных в виде OpenAPI-схемы можно найти в файле ./data/openapi.yaml. Визуально можно посмотреть через сервис ReDoc.

Требуется реализовать следующее:

1. Отображение информации о бригадах с возможностью постраничной навигации, по 20 бригад на странице. Формат отображения может быть любым
2. Фильтрация по состоянию связи
3. Фильтрация по подразделениям
4. Выбранные настройки фильтрации необходимо запоминать и использовать при повторном открытии приложения

От вас не требуется реализация UI/UX, но аккуратно свёрстанный интерфейс будет плюсом.

Также, крайне желательно не использовать для реализации задания "готовую" встроенную логику сторонних компонент. Никто, конечно, в своей обычной работе велосипеды старается не изобретать, но в случае тестового задания нам необходимо проверить ваши знания максимально широко.

Исходники тестового задания нужно предоставить в публичном git-репозитории, или в виде архива.